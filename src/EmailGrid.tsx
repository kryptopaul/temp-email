import { TextInput, Loader, Container } from '@mantine/core';
import { Select } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';
import { Group } from '@mantine/core';
import { Text } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { EmailList } from './EmailList';
import { IconRefresh } from '@tabler/icons';
import { useState } from 'react';
import { setGlobalState, useGlobalState } from './state';



export function EmailGrid() {
    
    const [loggedUser, setLoggedUser] = useGlobalState("currentEmail");

    const [emails, setEmails] = useState([{from: 'support@paypal.com', subject: 'PayPal Notification'}, {from: 'winrar@winrar.com', subject: 'Thank you for your purchase'}, {from: 'orders@candycrush.com', subject: 'Your recent transaction at Candy Crush'}, {from: 'amazon@gmail.com', subject: 'Moon Key Eagle Has Landed Artisan Keycap, Drop + biip MT3 Extended 2048 Custom Keycap Set, Drop Expression Series Matcha Summer Keyboard and more...!'}, {from: 'no-reply@pornhub.com', subject: 'Activate your account'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}, {from: 'example@gmail.com', subject: 'sample subject'}, {from: 'example@gmail.com', subject: 'hi!'}]);



    function RefreshButton(){
        return (
            <Button  style={{marginBottom: '10px'}} leftIcon={<IconRefresh size={14}/>}>
            Refresh
            </Button>
        );
    }
    
    function CurrentUser() {
        return(
            <div>
            <Group style={{marginBottom: '15px'}}>
            <Avatar size={40} color="teal">{loggedUser.charAt(0)}</Avatar>
            <div>
              <Text>Currently logged in as</Text>
              <Text size="xs" color="dimmed">{loggedUser}</Text>
            </div>
          </Group>
          <RefreshButton />
          </div>
        )
    }

    return(
        <SimpleGrid cols={2} spacing={'sm'} style={{marginTop: '50px'}}>
            <Container style={{width: '75%', borderRadius: '10px', paddingTop: '15px', backgroundColor: 'rgba(0, 0, 0, 0.5)', marginRight: '5px'}}>
                <Title style={{marginBottom: '15px'}} order={2}>Email List</Title>
                <CurrentUser/>
                <EmailList data={emails} />
            </Container>
            <Container style={{width: '75%', borderRadius: '10px', paddingTop: '15px', backgroundColor: 'rgba(0, 0, 0, 0.5)', marginLeft: '5px'}}>
                <Title style={{marginBottom: '10px'}} order={2}>Email Contents</Title>
                <Container>
                    <h1>Some email title</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Container>
            </Container>
        </SimpleGrid>
    );
  }