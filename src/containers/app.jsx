import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer.jsx";
import useInitialState from "../hooks/useInitialState";

import '../assets/styles/App.scss';

const API = "http://localhost:3000/initialState";

const App = () => {

    const initialState = useInitialState(API);
    console.log("Data in App from API");
    console.log(initialState);
    return initialState?.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />
            {initialState?.mylist?.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel >
                        {initialState?.mylist?.map((mine) =>
                            <CarouselItem key={mine.id} {...mine} />
                        )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {initialState?.trends?.map((trend) =>
                        <CarouselItem key={trend.id} {...trend} />
                    )}
                </Carousel>
            </Categories>
            <Categories title="Originales PlatziVideo">
                <Carousel>
                    {initialState?.originals?.map((original) =>
                        <CarouselItem key={original.id} {...original} />
                    )}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};

export default App;