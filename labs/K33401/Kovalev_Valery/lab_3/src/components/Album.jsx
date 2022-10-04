import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useGetRandomPhotosQuery} from "../redux";

import React from 'react';

const Album = () => {
    const randomPhotos = useGetRandomPhotosQuery({count:30});

    if(randomPhotos.isLoading){
        return
    }

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {randomPhotos.data.map(e=>(
                        <div key={e.id} className="col">
                            <Card>
                                <Card.Img variant="top" src={e.urls.regular} style={{width:'100%', height:'225px', objectFit:'cover'}}/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Album;
