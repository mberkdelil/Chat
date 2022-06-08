import { connect } from 'react-redux';
import React, { useState } from 'react'
import { Button, Icon, Menu, Popup } from 'semantic-ui-react';
import ChatPanel from '../ChatPanel/ChatPanel';
import ChannelsList from './ChannelsList';
import UserPanel from './UserPanel';
import { addChannel } from '../../actions';

const SidePanel = (props) => {

    const viewInput = () => {
        document.getElementById("input").style.display = "block";
        document.getElementById("buton").style.display = "block";
    }

    const hideButton = () => {
        document.getElementById("input").style.display = "none";
        document.getElementById("buton").style.display = "none";
    }

    const [channel, setChannel] = useState({ channel: "" });

    return (
        <>
            <Menu className='menu' vertical secondary inverted fixed='left' color='blue' style={{ width: "346px", fontSize: "1.3rem" }}    >
                <Menu.Item>
                    <UserPanel />
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>
                        Kanallar
                        <span style={{ float: "right" }}>
                            <Popup content="Yeni Kanal Oluştur" trigger={<Icon name='add' onClick={viewInput} />}>
                            </Popup>
                        </span>
                        <div className="ui input focus">
                            <input onChange={e => setChannel({ ...channel, channel: e.target.value })} value={channel.channel} type="text" id="input"
                                placeholder="enter channel name" style={{ width: "200px", display: "none" }} />
                            <Button id="buton" style={{ display: "none" }} basic color='black' onClick={() => {
                                props.addChannel(channel);
                                hideButton();
                            }}>
                                Add Channel
                            </Button>
                        </div>
                    </Menu.Header>
                    <ChannelsList />
                </Menu.Item>
            </Menu>
            <ChatPanel />
        </>
    )
}

export default connect(null, { addChannel })(SidePanel)