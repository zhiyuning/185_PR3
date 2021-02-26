import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props)
      this.state = {
         students: [
            { id: 1, name: 'Cloud', age: 21, about: 'Former First Class SOLDIER. After defecting from Shinra, Cloud began work as a mercenary for hire in Midgar. With his trusty broadsword in hand, he always gets the job done' },
            { id: 2, name: 'Tifa', age: 20, about: 'A member of the anti-Shinra militant group Avalanche. Tifa manages Seventh Heaven, a bar located in the Sector 7 slums. A student of Zangan-style martial arts, she can clobber opponents with her fleet-footed combat techniques.' },
            { id: 3, name: 'Barret', age: 35, about: 'A faction leader of the anti-Shinra militant group Avalanche. Barret is filled with a burning hatred for Shinra, a company he claims is destroying the planet. His right arm has been modified into a firearm, allowing him to attack his enemies at long range.' },
            { id: 4, name: 'Sephiroth', age: 22, about: 'There was one SOLDIER named Sephiroth, who was better than the rest, but when he found out about the terrible experiments that made him, he began to hate Shinra. And then, over time, he began to hate everything.' }
         ]
      }
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, about } = student
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{about}</td>
            </tr>
         )
      })
   }

   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Table Component</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }

}



export default Table
