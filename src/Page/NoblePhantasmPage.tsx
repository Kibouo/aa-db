import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import Connection from "../Api/Connection";
import NoblePhantasm from "../Api/Data/NoblePhantasm";
import Region from "../Api/Data/Region";
import DataTable from "../Component/DataTable";
import Loading from "../Component/Loading";
import RawDataViewer from "../Component/RawDataViewer";
import NoblePhantasmVersion from "./NoblePhantasm/NoblePhantasmVersion";

interface Event extends React.ChangeEvent<HTMLInputElement> {

}

interface IProps {
    region: Region;
    id: number;
}

interface IState {
    loading: boolean;
    noblePhantasm?: NoblePhantasm;
    level: number;
    overcharge: number;
}

class NoblePhantasmPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            level: 1,
            overcharge: 1,
        };
    }

    componentDidMount() {
        this.loadNp();
    }

    async loadNp() {
        const noblePhantasm = await Connection.noblePhantasm(this.props.region, this.props.id);

        this.setState({
            loading: false,
            noblePhantasm: noblePhantasm,
        });
    }

    private changeLevel(level: number) {
        this.setState({
            level: level
        });
    }

    private changeOvercharge(level: number) {
        this.setState({
            overcharge: level
        });
    }

    render() {
        if (this.state.loading || !this.state.noblePhantasm)
            return <Loading/>;

        const noblePhantasm = this.state.noblePhantasm;

        return (
            <div>
                <h1>{noblePhantasm.name}</h1>
                <br/>

                <DataTable data={{
                    "Raw": <RawDataViewer data={noblePhantasm}/>,
                    "ID": noblePhantasm.id,
                    "Name": noblePhantasm.name,
                    "Type": noblePhantasm.type,
                    "Rank": noblePhantasm.rank,
                    "Detail": noblePhantasm.detail,
                    "Card Type": noblePhantasm.card,
                }}/>

                <br/>
                <Row>
                    <Col>
                        <Form inline style={{justifyContent: 'flex-end'}}>
                            <Form.Control as={'select'} value={this.state.level}
                                          onChange={(ev: Event) => this.changeLevel(parseInt(ev.target.value))}>
                                {[1, 2, 3, 4, 5].map(level => (
                                    <option key={level} value={level}>NP LEVEL {level}</option>
                                ))}
                            </Form.Control>
                        </Form>
                    </Col>
                    <Col>
                        <Form inline>
                            <Form.Control as={'select'} value={this.state.overcharge}
                                          onChange={(ev: Event) => this.changeOvercharge(parseInt(ev.target.value))}>
                                {[1, 2, 3, 4, 5].map(level => (
                                    <option key={level} value={level}>OVERCHARGE {level}</option>
                                ))}
                            </Form.Control>
                        </Form>
                    </Col>
                </Row>

                <br/>
                <NoblePhantasmVersion region={this.props.region}
                                      noblePhantasm={noblePhantasm}
                                      level={this.state.level}
                                      overcharge={this.state.overcharge}/>
            </div>
        );
    }
}

export default NoblePhantasmPage;
