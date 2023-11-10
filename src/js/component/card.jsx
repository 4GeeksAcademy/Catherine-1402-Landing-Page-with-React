import React from "react";

export default function Card({imgUrl, imgAlt, title, description, buttonLink, buttonLabel}) {
    return <div className="col-12 col-sm-6 col-xl-3">
                <div className="card my-3 mx-1">
                    <img src={imgUrl} className="card-img-top" alt={imgAlt}></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-center py-3">
                            <a href={buttonLink} className="btn btn-primary">{buttonLabel}</a>
                        </li>
                    </ul>
                </div>
        </div>
    ;
}