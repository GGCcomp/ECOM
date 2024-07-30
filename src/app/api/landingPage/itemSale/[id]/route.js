import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ItemSale } from "@/utils/Modal/LandingPageSchema";

if (!mongoose.connection.readyState) {
    mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(() => {
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.error('Connection to MongoDB failed:', err);
    });
  }
  

  export async function PUT(request, { params }) {
    const id = params.id; 

    try {
        const { image, title, url } = await request.json();

        // Find and update the specific item within the collection
        const updatedItem = await ItemSale.findOneAndUpdate(
            { _id: id },
            { 
                $set: {
                    image,
                    title,
                    url
                }
            },
            { new: true, runValidators: true }
        );

        if (updatedItem) {
            return NextResponse.json({ ok: true });
        } else {
            console.log('Item not found:', id);
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }
    } catch (err) {
        console.log('Error:', err);
        return NextResponse.json({ status: 500, error: err.message });
    }
}