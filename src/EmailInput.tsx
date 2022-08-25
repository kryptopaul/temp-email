import { TextInput, Loader } from '@mantine/core';
import { Select } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { setGlobalState, useGlobalState } from './state';
import { useState } from 'react';
import { Text } from '@mantine/core';


export function EmailInput() {

    const [domains] = useGlobalState('domains');
    
    const [selectedUsername, setSelectedUsername] = useState<string | null>('');
    const [selectedDomain, setSelectedDomain] = useState<string | null>('');

    function DomainSelector() {

        return(
            <Select
            size='lg'
            data={domains}
            placeholder="Pick a domain"
            style={{marginBottom: '10px'}}
            defaultValue={selectedDomain}
            onChange={(value) => [setSelectedDomain(value), console.log(value)]}
          />
        )
    }
    
    function login(username:any, domain:any){
        (username.length > 0 && domain.length > 0) ? setGlobalState("currentEmail", `${username + domain}`) : console.log('error');
    }

    return(
    <div style={{marginTop: '-50px'}}>
        <Title style={{marginBottom: '10px'}} order={2}>{"Welcome back!"}</Title>
        <Text style={{marginBottom: '10px'}}>{"only for debugging! " + selectedUsername + selectedDomain}</Text>
        <TextInput 
        style={{marginBottom: '10px'}} 
        placeholder="Your email" 
        size='lg'
        onChange={(e) => [setSelectedUsername(e.target.value), console.log(selectedUsername)]}
        />
        <DomainSelector/>
        <Button size="lg" onClick={() => login(selectedUsername, selectedDomain)}>
            Login
        </Button>
    </div>
    );
  }