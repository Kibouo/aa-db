import {CraftEssence, Entity, Region, Servant, Skill} from "@atlasacademy/api-connector";
import {AxiosError} from "axios";
import React from "react";
import {Form} from "react-bootstrap";
import Api from "../Api";
import EffectBreakdown from "../Breakdown/EffectBreakdown";
import BuffIcon from "../Component/BuffIcon";
import DataTable from "../Component/DataTable";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import RawDataViewer from "../Component/RawDataViewer";
import CraftEssenceDescriptor from "../Descriptor/CraftEssenceDescriptor";
import MysticCodeDescriptor from "../Descriptor/MysticCodeDescriptor";
import ServantDescriptor from "../Descriptor/ServantDescriptor";
import Manager from "../Setting/Manager";
import SkillVersion from "./Skill/SkillVersion";

interface Event extends React.ChangeEvent<HTMLInputElement> {

}

interface IProps {
    region: Region;
    id: number;
}

interface IState {
    error?: AxiosError;
    loading: boolean;
    skill?: Skill.Skill;
    levels: number;
    level: number;
}

class SkillPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            levels: 1,
            level: 1
        };
    }

    componentDidMount() {
        Manager.setRegion(this.props.region);
        this.loadSkill();
    }

    async loadSkill() {
        try {
            const skill = await Api.skill(this.props.id);

            this.setState({
                loading: false,
                skill: skill,
                levels: skill.functions[0].svals?.length ?? 1,
            });
            document.title = `[${this.props.region}] Skill - ${skill.name} - Atlas Academy DB`
        } catch (e) {
            this.setState({
                error: e
            });
        }
    }

    private changeLevel(level: number) {
        this.setState({
            level: level
        });
    }

    render() {
        if (this.state.error)
            return <ErrorStatus error={this.state.error}/>;

        if (this.state.loading || !this.state.skill)
            return <Loading/>;

        const skill = this.state.skill;

        return (
            <div>
                <h1>
                    {skill.icon ? (
                        <BuffIcon location={skill.icon} height={48}/>
                    ) : undefined}
                    {skill.icon ? ' ' : undefined}
                    {skill.name}
                </h1>

                <br/>

                <DataTable data={{
                    "ID": skill.id,
                    "Name": skill.name,
                    "Detail": skill.detail,
                    "Owner": (
                        <div>
                            {(skill.reverse?.nice?.servant ?? [])
                                .filter(entity => {
                                    return entity.type === Entity.EntityType.NORMAL
                                        || entity.type === Entity.EntityType.HEROINE
                                        || entity.type === Entity.EntityType.SERVANT_EQUIP;
                                })
                                .map((entity, index) => {
                                    if (entity.type === Entity.EntityType.SERVANT_EQUIP) {
                                        return (
                                            <div key={index}>
                                                <CraftEssenceDescriptor region={this.props.region}
                                                                        craftEssence={entity as CraftEssence.CraftEssence}/>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div key={index}>
                                                <ServantDescriptor region={this.props.region}
                                                                   servant={entity as Servant.Servant}
                                                                   iconHeight={24}/>
                                            </div>
                                        );
                                    }
                                })
                            }
                            {/* TODO: Command Code reverse mapping */}
                            {(skill.reverse?.nice?.MC ?? [])
                                .map((mysticCode, index) => {
                                    return (
                                        <MysticCodeDescriptor key={index}
                                                              region={this.props.region}
                                                              mysticCode={mysticCode}/>
                                    );
                                })
                            }
                        </div>
                    )
                }}/>
                <span>
                    <RawDataViewer text="Nice" data={skill}/>
                    <RawDataViewer
                        text="Raw"
                        data={`https://api.atlasacademy.io/raw/${this.props.region}/skill/${skill.id}?expand=true`}/>,
                </span>

                <br/>
                <h3>Breakdown</h3>
                <EffectBreakdown region={this.props.region}
                                 cooldowns={skill.coolDown.length > 0 ? skill.coolDown : undefined}
                                 funcs={skill.functions}
                                 levels={skill.functions[0]?.svals.length ?? 1}
                                 scripts={skill.script}/>

                <br/>
                <br/>
                <h3>Detailed Effects</h3>
                <Form inline style={{justifyContent: 'center'}}>
                    <Form.Control as={'select'} value={this.state.level}
                                  onChange={(ev: Event) => this.changeLevel(parseInt(ev.target.value))}>
                        {Array.from(Array(this.state.levels).keys()).map(i => i + 1).map(level => (
                            <option key={level} value={level}>LEVEL {level}</option>
                        ))}
                    </Form.Control>
                </Form>

                <br/>
                <SkillVersion region={this.props.region}
                              skill={skill}
                              level={this.state.level}/>
            </div>
        );
    }
}

export default SkillPage;
