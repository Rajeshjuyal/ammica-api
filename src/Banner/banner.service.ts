import {HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {UsersDTO} from '../users/users.model';
import {BannerDTO, BannerType} from './banner.model';
import {CommonResponseModel} from '../utils/app-service-data';

@Injectable()
export class BannerService {
    constructor(@InjectModel('Banner') private readonly bannerModel: Model<any>) {
    }

    // sends request to get banners
    public async getBannerByPagination(user: UsersDTO, pageNum: number, limit: number): Promise<CommonResponseModel> {
        if (user.role !== 'SuperAdmin') {
            return {response_code: HttpStatus.UNAUTHORIZED, response_data: 'You are not authorized to access this api'};
        }
        const banners = await this.bannerModel.find({}).limit(limit).skip((pageNum * limit) - limit).populate('category').populate('product');
        const bannerCount = await this.bannerModel.countDocuments();
        const paginationCount = Math.round(bannerCount / limit);
        return {response_code: HttpStatus.OK, response_data: {banners, bannerCount, paginationCount}};
    }

    // creates banner
    public async saveBanner(user: UsersDTO, banner: BannerDTO): Promise<CommonResponseModel> {
        if (user.role !== 'SuperAdmin') {
            return {response_code: HttpStatus.UNAUTHORIZED, response_data: 'You are not authorized to access this api'};
        }
        if (banner.bannerType === BannerType.School && !banner.school) {
            return {response_code: HttpStatus.BAD_REQUEST, response_data: 'Please select a school'};
        } else if (banner.bannerType === BannerType.Own) {
            console.log("Super Admin Banner")
        }
        try {
            const bannerSaveRes = await this.bannerModel.create(banner);
            return {response_code: HttpStatus.CREATED, response_data: 'Banner saved successfully'};
        } catch (e) {
            return {response_code: HttpStatus.BAD_REQUEST, response_data: 'Something went wrong, Please try again'};
        }
    }

    // updates banner
    public async updateBanner(user: UsersDTO, bannerId, banner: BannerDTO): Promise<CommonResponseModel> {
        if (user.role !== 'SuperAdmin') {
            return {response_code: HttpStatus.UNAUTHORIZED, response_data: 'You are not authorized to access this api'};
        }
        if (banner.bannerType === BannerType.School && !banner.school) {
            return {response_code: HttpStatus.BAD_REQUEST, response_data: 'Please select a school'};
        } else if (banner.bannerType === BannerType.Own) {
            console.log("Super Admin Banner")
        }
        try {
            const bannerSaveRes = await this.bannerModel.findByIdAndUpdate(bannerId, banner);
            return {response_code: HttpStatus.OK, response_data: 'Banner updated successfully'};
        } catch (e) {
            return {response_code: HttpStatus.BAD_REQUEST, response_data: 'Something went wrong, Please try again'};
        }
    }

    // deletes banner
    public async deleteBanner(user: UsersDTO, bannerId: string): Promise<CommonResponseModel> {
        if (user.role !== 'SuperAdmin') {
            return {response_code: HttpStatus.UNAUTHORIZED, response_data: 'You are not authorized to access this api'};
        }
        try {
            const bannerSaveRes = await this.bannerModel.findByIdAndDelete(bannerId);
            return {response_code: HttpStatus.OK, response_data: 'Banner deleted successfully'};
        } catch (e) {
            return {response_code: HttpStatus.BAD_REQUEST, response_data: 'Something went wrong, Please try again'};
        }
    }
    // sends request to get banners user
    public async getBanner(): Promise<CommonResponseModel> {
        const banners = await this.bannerModel.find({status:1},'title bannerType filePath imageURL category product description');
        return {response_code: HttpStatus.OK, response_data: {banners,total:banners.length}};
    }

}
