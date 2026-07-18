import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product-dto';
import { Products } from './entities/products.entity';
import { PartialupdateProductDto,  } from './dto/partial-update-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Products)
        private productRepo:Repository<Products>
    ){}

    async create(dto:CreateProductDto){

        const newProduct=this.productRepo.create(dto);
        const saved=await this.productRepo.save(newProduct);

        return{
            message:"Careated successfully",
            data:saved,
        }
    }

    async findAll(){
        const products=await this.productRepo.find({
            order:{
                createdAt:'DESC'
            },
        });

        return{
            message:'All products Fetched',
            data:products,
            count:products.length
        }

    }

    async findOne(id:number){
        const product=await this.productRepo.findOne({
            where:{id:id},
        })

        if(!product){
            throw new NotFoundException(`Product of ID ${id} not found`);
        }
        return{
            message:"Product fetched successfully",
            data:product
        }
    }

    async update(id:number,dto:PartialupdateProductDto){
        await this.findOne(id);

        await this.productRepo.update(id,dto);

        const updatedData=await this.productRepo.findOne({
            where:{id},
        })

        return{
            message:'Updated successfully',
            data:updatedData
        }
    }

    async replace(id:number,dto:UpdateProductDto){
        await this.findOne(id);

        await this.productRepo.update(id,dto);

        const replaced=await this.productRepo.findOne({
            where:{id}
        })

        return{
            message:'replaced  successfully',
            data:replaced,
        }
    }


    async findByCategory(category:string){
        const result=await this.productRepo.find({
            where:{category:category},
            order:{
                createdAt:'DESC'
            }
        })

        return{
            message:'',
            data:result,
            count:result.length
        }
    }

    async remove(id:number){

        await this.findOne(id)

        await this.productRepo.delete(id)

        return{
            message:'Product deleted successfully',
            id
        }
    }

    async search(keyword:string){

        const result=await this.productRepo.find({
            where:{
                name:ILike(`%${keyword}%`)
            },
            order:{createdAt:'DESC'}
        })

        return{
            message:`Search results for: ${keyword}`,
            data:result,
            count:result.length
        }

    }

    async toggleActive(id:number){
        const result=await this.findOne(id);
        const product=result.data;
        product.isActive=!product.isActive;

        const saved=await this.productRepo.save(product);

        return{
            message:'Product status toogled',
            data:saved,
        }


    }


}

