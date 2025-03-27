import Feature1 from '../../../assets/images/feature1.webp';
import Feature2 from '../../../assets/images/feature2.webp';
import Feature3 from '../../../assets/images/feature3.webp';
import Feature4 from '../../../assets/images/feature4.webp';
import FeatureCard from '../components/FeatureCard';

const FeaturesComponent = () => {
    const featuresData = [
        { id: 1, img: Feature4, alt: 'Feature4', h4: 'Free shipping', title: 'On all orders over $49.00' },
        { id: 2, img: Feature3, alt: 'Feature3', h4: '15 days returns', title: 'Money back guarantee' },
        { id: 3, img: Feature1, alt: "Feature1", h4: 'Secure checkout', title: 'Protected by Paypal' },
        { id: 4, img: Feature2, alt: 'Feature2', h4: 'Offer & gift here', title: 'On all orders over' }
    ];
    return (
        <>
            <div className='w-screen p-[10px] mt-[-80px]  flex items-center justify-center  relative z-[1]'>
                <div className=' h-full w-[77%] bg-[#fdfdfd] flex items-center justify-evenly gap-[20px] flex-wrap shadow-sm p-[10px] pt-[40px] pb-[40px]'>
                    {featuresData.map((feature) => (
                        <FeatureCard key={feature.id} img={feature.img} alt={feature.alt} h4={feature.h4} title={feature.title} className="flex gap-[20px] p-[10px]" imgClassName="w-[50px] h-[50px]" h4ClassName="text-[16px] !font-thin text-[#010101]" pClassName="text-[14px] !font-thin text-[#666]" />))}
                </div>
            </div>
        </>
    )
}

export default FeaturesComponent
