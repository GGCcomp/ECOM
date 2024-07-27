import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { OurCollection } from "@/utils/Modal/LandingPageSchema";

if (!mongoose.connection.readyState) {
    mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(() => {
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.error('Connection to MongoDB failed:', err);
    });
  }

export async function GET(){
    try{
        const collection = await OurCollection.find();
        return NextResponse.json(collection);
    }catch(err){

    }
} 

export async function POST(request){
    const payload = {
        mainTitle: 'Our Collections',
        items: [
            {
                img: 'https://sahara-theme.myshopify.com/cdn/shop/files/FAE_Hotel_Sages_-834_2_-min.jpg',
                url: '/types/shop_all',
                title: 'Swimwear'
            },
            {
                img: 'https://sahara-theme.myshopify.com/cdn/shop/files/FAE_Hotel_Sages_-437_4_-min.jpg',
                url: 'types/bikini_tops',
                title: 'Tops'
            },
            {
                img: 'https://sahara-theme.myshopify.com/cdn/shop/files/fae_-35.jpg',
                url: 'types/bikini_bottoms',
                title: 'Bottoms'
            }
        ]
    };
    try{
        const collection = new OurCollection(payload);
        await collection.save();
        return NextResponse.json({ok:true});
    }catch(err){
        console.log(err);
        return NextResponse.json({status: 500})
    }
}