import React from "react";
import Card from "./card";
import { cardsData } from "../../data-base/mockData";

export default function CardList() {
    return <div className="container d-flex mt-3 mb-5">
        <div className="row">
            {
                cardsData.map(((data, index) => {
                return <Card 
                        key={index} 
                        imgUrl={data.imgUrl} 
                        imgAlt={data.imgAlt} 
                        title={data.title} 
                        description={data.description} 
                        buttonLink={data.buttonLink} 
                        buttonLabel={data.buttonLabel}>
                    </Card>
                }))
            }
        </div>
        
    </div>
}