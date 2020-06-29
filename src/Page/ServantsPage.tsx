import React from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Connection from "../Api/Connection";
import ServantListEntity from "../Api/Data/ServantListEntity";
import ClassIcon from "../Component/ClassIcon";
import Loading from "../Component/Loading";
import RarityStars from "../Component/RarityStars";
import ServantThumbnail from "../Component/ServantThumbnail";

import './ServantsPage.css';

interface IProps {
}

interface IState {
    loading: boolean;
    servants: ServantListEntity[];
}

class ServantsPage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            servants: [],
        };
    }

    componentDidMount() {
        Connection.servantList().then(servantList => {
            this.setState({
                loading: false,
                servants: servantList
            });
        });
    }

    render() {
        if (this.state.loading)
            return <Loading/>

        return (
            <div id="servants">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th style={{textAlign: "center", width: '1px'}}>#</th>
                        <th style={{textAlign: "center", width: '1px'}}>Class</th>
                        <th style={{textAlign: "center", width: '1px'}}>Thumbnail</th>
                        <th>Name</th>
                        <th>Rarity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.servants.map((servant, index) => {
                        return <tr key={index}>
                            <td align={"center"}>
                                <Link to={`/servant/${servant.collectionNo}`}>
                                    {servant.collectionNo}
                                </Link>
                            </td>
                            <td align={"center"}>
                                <ClassIcon className={servant.className} rarity={servant.rarity} height={50} />
                            </td>
                            <td align={"center"}>
                                <Link to={`/servant/${servant.collectionNo}`}>
                                    <ServantThumbnail rarity={servant.rarity} location={servant.face} height={50}/>
                                </Link>
                            </td>
                            <td>
                                <Link to={`/servant/${servant.collectionNo}`}>
                                    {servant.name}
                                </Link>
                            </td>
                            <td>
                                <RarityStars rarity={servant.rarity}/>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default ServantsPage;