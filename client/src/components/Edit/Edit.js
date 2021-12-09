import './Edit.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById } from '../../services/article';

import Animals from '../Create/CategoryModels/Animals';
import Cars from '../Create/CategoryModels/Cars';
import Clothes from '../Create/CategoryModels/Clothes';


export default function Edit() {



    const [artData, setArtData] = useState([]);
    const { artId } = useParams();

    useEffect(() => {
        getById(artId).then(res =>
            setArtData(res.article)
        ).catch(err => {
            console.log(err.message);
        })
    }, [artId]);

    const modelComponents = {
        cars: <Cars artData={artData} artId={artId} />,
        animals: <Animals artData={artData} />,
        clothes: <Clothes artData={artData} />,
    };

    return (
        <section className="edit-article">
            <div className="edit-article-box">
                <div className="edit-art-text">
                    <h1 className="art-title">Edit Article</h1>
                </div>
                {modelComponents[artData.category]}
            </div>
        </section>
    )
}
