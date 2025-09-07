import Container from "../Container/Container";

export default function SubmitSection(){
    return (
        <div className="bg-[#BB0000] py-18 md:py-24">
            <Container>
                <div className="flex flex-col md:flex-row gap-18 justify-between items-center">
                    <div className="flex flex-col items-start justify-center">
                        <div>
                            <h3 className="text-white text-[38px] md:text-[42px] text-center font-bold text-white-800 mb-6 leading-[48px] md:leading-[50px]">
                                Готовы к сотрудничеству?
                            </h3>
                            <p className=" text-white max-w-2xl text-center opacity-70 text-[18px] md:text-[20px] leading-[28px] font-semibold">
                                Предлагаем провести бесплатную дегустацию
                            </p>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg animate-bounce">
                        <a
                            href="https://wa.me/79285455896"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#264653] hover:bg-[#264653] text-white font-semibold text-lg px-10 py-4 rounded-lg transition duration-300 transform "
                        >
                            Сотрудничать
                        </a>
                    </div>

                </div>
            </Container>
            
        </div>
    )
}