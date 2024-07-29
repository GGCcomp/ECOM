import Link from 'next/link';
import EditItem from './landingPage/EditItem';

const getData = async () => {
    let res = await fetch('http://localhost:3000/api/landingPage/ourcollection', {cache: 'no-store'});
    res = await res.json();
    return res;
}

async function OurCollections() {
    const data = await getData();

    return (
        <div className='h-screen px-12 md:px-24 py-10'>
            {data ? (
                <>
                    <div className='py-10 flex justify-between relative'>
                        <h1 className='text-3xl font-semibold uppercase'>{data[0].mainTitle}</h1>
                        <div className='hidden md:block'>
                            <button className='px-12 py-3 tracking-wide text-sm border border-black hover:bg-black hover:text-white uppercase'>
                                <Link href='/types/shop_all'>Explore All</Link>
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-3/4 overflow-x-scroll md:overflow-x-auto scrollbar-hide'>
                        <div className='h-full flex w-[calc(200vw)] gap-1 md:w-full justify-center text-center text-white'>
                            {data[0].items.map((item, i) => (
                                <EditItem key={i} item={item} api={'http://localhost:3000/api/landingPage/ourcollection'} storageUrl={'ourCollections'}/>
                            ))}
                        </div>
                    </div>
                    <div className='md:hidden flex justify-center my-8'>
                        <button className='px-12 py-3 tracking-wide text-sm border border-black hover:bg-black hover:text-white uppercase'>
                            <Link href='/types/shop_all'>Explore All</Link>
                        </button>
                    </div>
                </>
            ) : <p>Problem loading data from backend.</p>}
        </div>
    );
}

export default OurCollections;
