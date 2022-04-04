import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, query, where, getDocs,  addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import React from 'react'

/*
*for each loop
*pull in the information from a case
*search for the name data
*use that as input for the search api
*take the first 5 returns and place them in the database under the case
*/

const Webscraper = () => {
    // Collection reference
    const casesCollectionRef = collection(db, "cases") // establish connection to db & collection
    const [cases, setCases] = useState([])
    const [newLinks, setLinks] = useState("")

    // Retrieves cases with getDocs & our collection reference
    /*const getCases = async () => {
        const data = await getDocs(casesCollectionRef)
        setCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }*/

    //only get cases where the offense was manslaughter
    const getCases = async (crime = "Manslaughter/ Non-Negligent") => {
        const q = query(casesCollectionRef, where("Offense","==",`${crime}`))
        const data = await getDocs(q)
        setCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }
    //sepCase => console.log(sepCase.id, " => ", sepCase)
    const addLinks = async () => {
        cases.forEach(async function(sepCase){
            const data = await fetch(`https://www.googleapis.com/customsearch/
            v1?key=AIzaSyDwv4jTHYv5CKadNlRI_kQFTyZXCpWtlmA&cx=f2e21ac773fc5ae60&fields=items(link)&q=${sepCase['Name']}`)
            console.log(sepCase['Name']);
            const fData = await data.json()
            const userDoc = doc(db, "cases", doc.id)
            const newFields = { fData }
            console.log(fData)
            updateDoc(userDoc, newFields)
        }) 
    }

    useEffect(() => {
        //getCases()
        //addLinks()
    }, [])

    /*db.collection("cases").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const data = await fetch(`https://www.googleapis.com/customsearch/
            v1?key=AIzaSyDwv4jTHYv5CKadNlRI_kQFTyZXCpWtlmA&cx=f2e21ac773fc5ae60&fields=items(link)&q=${doc.data().Name}`)
            const fData = await data.json()
            //addLinks(id, data)
            const userDoc = doc(db, "cases", doc.id)
            const newFields = { fData }
            updateDoc(userDoc, newFields)
        });
    });*/

    /*const searchData = async (name) => {
        const {data} = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDwv4jTHYv5CKadNlRI_kQFTyZXCpWtlmA&cx=f2e21ac773fc5ae60&&fields=items(link)&q=${name}`)
        addLinks(id, data)
    }*/
    return (
        
        <div>
            <button onClick={() => {getCases()}}>get Cases</button>
            <button onClick={() => {addLinks()}}>add Link</button>
        </div>
    );
}
export default Webscraper