import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { doc, query, collection, getDocs, where, updateDoc } from "firebase/firestore";
import "./CommentBox.css"
const CommentBox = ({ caseID, commentData }) => {
   const userCollectionRef = collection(db,"cases")
    
    return (
        <div>
            <div className="case-div">
                <h1>{commentData['username']}</h1>
                <h4>{commentData['comment']}</h4>

            </div>
            
        </div>

    )
}

export default CommentBox