import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    image: String,
    title: String,
    title2: String,
    url: String,
    url2: String
})

export const Banner = mongoose.models.Banner || mongoose.model('Banner', bannerSchema);

const ourCollectionSchema = new mongoose.Schema({
    mainTitle : String,
    items: [
        {
            image: String,
            url: String,
            title: String,
        }
    ]
})

export const OurCollection = mongoose.models.OurCollection || mongoose.model('OurCollection', ourCollectionSchema);

const dualTileSchema = new mongoose.Schema({
    title: String,
    image: String,
    desc: String,
    url: String
})

export const DualTile = mongoose.models.DualTile || mongoose.model('DualTile', dualTileSchema);

const itemSaleSchema = new mongoose.Schema({
    title: String,
    image: String,
    url: String
})

export const ItemSale = mongoose.models.ItemSale || mongoose.model('ItemSale', itemSaleSchema);


const counterSchema = new mongoose.Schema({
    title: String,
    count: Date,
    url: String
})

export const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);


const counterSaleSchema = new mongoose.Schema({
    title: String,
    image: String,
    url: String
})

export const CounterSale = mongoose.models.CounterSale || mongoose.model('CounterSale', counterSaleSchema);

const ourMissionSchema = new mongoose.Schema({
    title: String,
    desc: String
})

export const OurMission = mongoose.models.OurMission || mongoose.model('OurMission', ourMissionSchema);

const blogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    image: String
})

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);