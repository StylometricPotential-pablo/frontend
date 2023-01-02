import react from "react";


const Home = ({ navigation }) => {

    const navigate = () => {
        console.log("Howdy");

    }

    return (
        <>
            <div className="flex justify-center text-center justify-center align-center ">
                <p className="font-custom1 absolute top-5 left-1/2 transform -translate-x-1/2 text-black text-bold pt-9 text-5xl">Detect ChatGPT usage!</p>
                <button class="mr-44 mt-60 w-96 h-80 px-6 m-2 text-4xl text-indigo-100 transition-colors duration-150 bg-[#FF7A7A] rounded-xxl focus:shadow-outline hover:bg-indigo-800">Analayze</button>
                <button onClick={() => navigate()} class="ml-44 mt-60 w-96 h-80 px-6 m-2 text-4xl text-indigo-100 transition-colors duration-150 bg-[#D177F1] rounded-xxl focus:shadow-outline hover:bg-indigo-800">Submit</button>






            </div>


        </>

    );



    export default Home;                    