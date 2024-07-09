import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { Order } from '@/utils/schema';

if (!mongoose.connection.readyState) {
    mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(() => {
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.error('Connection to MongoDB failed:', err);
    });
  }

  export async function GET(request,{params}){
    try{
      const {id} = params
      const populatedOrder = await Order.findById(id).populate('products').exec();
      return NextResponse.json(populatedOrder)
    }catch(err){
      return NextResponse.json({err})
    }
  }

 