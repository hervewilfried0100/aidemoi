import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        prestataire: {
          connect: {
            id: createUserDto.prestataire
          }
        }
      }
    })
  }

  public async register(createUserDto: CreateUserDto) {
    if (createUserDto.motdepasse !== createUserDto.motdepasseConfirmation) {
      throw new HttpException('PASSWORD_NOT_SAME', HttpStatus.BAD_REQUEST);
    }

    const user = await this.prisma.user.findUnique({where: { telephone:  createUserDto?.telephone}});

    if (user) {
      throw new HttpException('USER_EXIST', HttpStatus.FORBIDDEN);
    }

    const hashedPassword = await bcrypt.hash(createUserDto?.motdepasse, 10);
    try{
      return await this.prisma.user.create({
        data: {
          telephone: createUserDto?.telephone,
          motdepasse: hashedPassword
        },
        select: {
          motdepasse: false,
          id: true,
          telephone: true
        }
      }
      );
    } catch (e) {
      throw new HttpException('ERROR_REGISTER', HttpStatus.BAD_REQUEST);
    }
  }

  public async login(loginDto: LoginUserDto){
    const userLogin = await this.prisma.user.findUnique({ where: { telephone: loginDto.telephone } });
    if (!userLogin) {
      throw new HttpException('LOGIN_INCORRECT', HttpStatus.UNAUTHORIZED);
    }
    // Verification du mot de passe
    const comparePassword = await bcrypt.compare(loginDto.motdepasse, userLogin.motdepasse);
    if (!comparePassword) {
      throw new HttpException('LOGIN INCORRECT', HttpStatus.UNAUTHORIZED);
    }
    // Suppression du mot de passe dans la reponse de connexion
    userLogin.motdepasse = undefined;
    return userLogin;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    try {
      return this.prisma.user.delete({
        where: {
          id: id
        }
      })
    } catch (e) {
      throw new HttpException('DELETE_FAIL', HttpStatus.UNAUTHORIZED);
    }
  }
}
