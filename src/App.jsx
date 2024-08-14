import "./App.css";
import CommentsFeed from "./AllComponents/CommentsFeedComponent/CommentsFeed";
import AddNewComment from "./AllComponents/AddNewCommentComponent/AddNewComment";
import CurrentUserImage from "../public/assets/avatars/juliusomo.png";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // For Current Users
  const [currentUser, setCurrentUser] = useState([
    {
      image: {
        png: "/assets/avatars/juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
  ]);

  // useEffect(() => {
  //   function callApi() {
  //     fetch("http://localhost:3000/currentUser").then((currentUser) => {
  //       return currentUser
  //         .json()
  //         .then((finalcurrentUser) => {
  //           setCurrentUser(finalcurrentUser);
  //           // console.log(finalcurrentUser)
  //         })
  //         .catch((error) => console.error("Error fetching comments:", error));
  //     });
  //   }
  //   callApi();
  // }, []);

  // For Another Users
  const [comments, setComments] = useState([
    {
      id: "1",
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "/assets/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: "2",
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "/assets/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "/assets/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "/assets/avatars/juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   function callApi() {
  //     fetch("http://localhost:3000/comments").then((AnotherUsers) => {
  //       return AnotherUsers.json().then((finalAnotherUsers) => {
  //         // console.log(finalResponse)
  //         setComments(finalAnotherUsers);
  //       });
  //     });
  //   }
  //   callApi();
  // }, []);

  //Add My new comment
  function CommentAdded(newCommentValue) {
    const NewCommentObject = {
      id: uuidv4(),
      content: newCommentValue,
      createdAt: "Just now",
      score: 0,
      user: {
        image: {
          png: "/assets/avatars/juliusomo.png",
        },
        username: "juliusomo",
      },
      replies: [],
    };
    // console.log(NewCommentObject);
    // const jsonString = JSON.stringify(NewCommentObject);
    // console.log(jsonString);

    // Add my comment to array
    // fetch('http://localhost:3000/comments', {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify(NewCommentObject) })

    // Add my comment to ui
    // .then(response => response.json())
    // .then(newComment => {  }
    setComments([...comments, NewCommentObject]);
  }

  function NewContenteAfterEdit(newContent, clickedcommentId) {
    // console.log(newContent);
    const updatedMyComments = comments.map((comment) => {
      if (comment.id == clickedcommentId) {
        return { ...comment, content: newContent };
      } else {
        return comment;
      }
    });

    setComments(updatedMyComments);
  }

  // Add Reply function
  function handleAddReply(replyContent, commentId) {
    // console.log(ReplyCommentId)
    const updatedCommentsWithReplies = comments.map((comment) => {
      if (comment.id == commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: uuidv4(),
              content: replyContent,
              createdAt: "Just now",
              score: 0,

              user: {
                image: {
                  png: "/assets/avatars/juliusomo.png",
                },

                username: "juliusomo",
              },
            },
          ],
        };
      } else return comment;
    });

    setComments(updatedCommentsWithReplies);
  }

  //Edit my replies function
  function NewReplieseAfterEdit(
    clickedCommentId,
    clickedReplyId,
    ValueAfterReplyEdit
  ) {
    //  console.log(clickedCommentId , clickedReplyId , ValueAfterReplyEdit)
    let updatedMyCommentsWithReplies = comments.map((comment) => {
      if (comment.id == clickedCommentId) {
        let updatedReply = comment.replies.map((reply) => {
          if (reply.id == clickedReplyId) {
            return { ...reply, content: ValueAfterReplyEdit };
          }
          return reply;
        });

        comment = { ...comment, replies: updatedReply };
      }
      return comment;
    });

    setComments(updatedMyCommentsWithReplies);

    //  console.log(updatedMyCommentsWithReplies)
  }

  // Delete function for comment items

  function DeleteCommentFunction(commentId) {
    const newObjectAfterDeleteComment = comments.filter(
      (comment) => comment.id != commentId
    );
    setComments(newObjectAfterDeleteComment);
  }

  // Delete function for reply items
  function DeleteReplyFunction(commentId, replyId) {
    let newComments = comments.map((comment) => {
      if (comment.id == commentId) {
        let updatedReplies = comment.replies.filter(
          (reply) => reply.id != replyId
        );
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(newComments);
    //  console.log("Updated comments after delete:", newComments);
  }

  return (
    <div id="MainContainer">
      <CommentsFeed
        comments={comments}
        setComments={setComments}
        DeleteCommentFunction={DeleteCommentFunction}
        NewContenteAfterEdit={NewContenteAfterEdit}
        handleAddReply={handleAddReply}
        CurrentUserImage={CurrentUserImage}
        DeleteReplyFunction={DeleteReplyFunction}
        NewReplieseAfterEdit={NewReplieseAfterEdit}
      />

      <AddNewComment
        CommentAdded={CommentAdded}
        CurrentUserImage={CurrentUserImage}
      />
    </div>
  );
}
