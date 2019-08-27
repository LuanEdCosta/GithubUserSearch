import React, { useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import User from "./components/user"

import axios from 'axios'

export default function app() {
    const [user, setUser] = useState(null)
    const [search, setSearch] = useState('')

    const searchUser = () => {
      if(search.trim()){        
        axios.get('https://api.github.com/users/' + search)
          .then(res => {
            const { data } = res
            setUser({
              name: data.name,
              image: data.avatar_url,
              bio: data.bio
            })
          })
          .catch(() => {
            setUser(null)
          })
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

          <Text style={styles.title}>Github User Search</Text>

          <TextInput
            style={styles.input}
            placeholder="Type Something to Search"
            onChangeText={(text) => setSearch(text)}
          />

          <TouchableOpacity onPress={searchUser}>
            <Text style={styles.searchButton}>Search</Text>
          </TouchableOpacity>

          <User user={user}/>
        
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    fontSize: 16,
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#8000ff',
  },
  input: {
    fontSize: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 5,
    marginVertical: 16
  },
  searchButton: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: '#8000ff',
    textTransform: 'uppercase',
    borderRadius: 5,
    backgroundColor: '#8000ff',
  }
})