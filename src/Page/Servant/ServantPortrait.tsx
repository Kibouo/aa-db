import React from "react";
import {AssetMap} from "../../Api/Data/AssetCollection";
import Servant from "../../Api/Data/Servant";

import "./ServantPortrait.css";

interface IProps {
    servant: Servant;
}

interface IState {
    assetMap?: AssetMap;
    assetKey?: string;
}

class ServantPortrait extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const assetMap = (
                props.servant.extraAssets.charaGraph.ascension
                ?? Object.values(props.servant.extraAssets.charaGraph).shift()
            ),
            assetKey = assetMap === undefined ? undefined : Object.keys(assetMap).shift();

        this.state = {assetMap, assetKey};
    }

    render() {
        return (
            <div>
                <img alt={this.props.servant.name}
                     id={'servant-portrait'}
                     src={(
                         this.state.assetMap && this.state.assetKey
                             ? this.state.assetMap[this.state.assetKey]
                             : undefined
                     )}/>
            </div>
        );
    }
}

export default ServantPortrait;
