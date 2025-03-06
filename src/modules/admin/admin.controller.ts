import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/interface/usersdto';
import { AdminService } from './admin.service';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard("admin-access-jwt"))
@Controller('admin')
export class AdminController {
    constructor(
        private adminService: AdminService,
        private userService: UsersService,
    ) {}

    @Post('users')
    async createUser(@Body() body: CreateUserDto): Promise<{ status: Boolean}> {
        return await this.adminService.createUser(body);
    }
    
    @Get('users')
    async getUser(@Query('page') page: number, @Query('limit') limit: number) {
        return await this.adminService.getUsers(page, limit);
    }

    @Get('users/:userId')
    async fetchUser(@Param('userId') userId:  string) {
        return await this.userService.getUserById(userId);
    }

    @Delete('users/:userId')
    async deleteUser(@Param('userId') userId: string):Promise<any> {
        return await this.userService.deleteUser(userId);
    }

    @Patch('users/:userId')
    async updateUser(@Param('userId') userId: string, @Body() body: CreateUserDto) {
        console.log("reached updateUser end point", body)
        return await this.userService.updateUser(userId, body);      
    }

    

    
}
