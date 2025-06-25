import React from 'react'


const commentsData = [
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        {
                            name:"Chandan Yadav",
                            text:"I love your store Redux but only when React is there.",
                            replies:[
                                    {
                                        name:"Julie",
                                        text:"Indian people are just impossible.",
                                        replies:[
                                            
                                        ]
                                    },
                                    {
                                        name:"Chandan Yadav",
                                        text:"I love your store Redux but only when React is there.",
                                        replies:[
                                                {
                                                    name:"Julie",
                                                    text:"Indian people are just impossible.",
                                                    replies:[
                                                        
                                                    ]
                                                }
                                        ]
                                    },
                                    {
                                        name:"Chandan Yadav",
                                        text:"I love your store Redux but only when React is there.",
                                        replies:[
                                                {
                                                    name:"Julie",
                                                    text:"Indian people are just impossible.",
                                                    replies:[
                                                        
                                                    ]
                                                }
                                        ]
                                    },
                                    
                            ]
                        },

                        {
                            name:"Chandan Yadav",
                            text:"I love your store Redux but only when React is there.",
                            replies:[
                                    {
                                        name:"Julie",
                                        text:"Indian people are just impossible.",
                                        replies:[
                                            
                                        ]
                                    },
                                    {
                                        name:"Chandan Yadav",
                                        text:"I love your store Redux but only when React is there.",
                                        replies:[
                                                {
                                                    name:"Julie",
                                                    text:"Indian people are just impossible.",
                                                    replies:[
                                                        
                                                    ]
                                                }
                                        ]
                                    },
                        
                            ]
                        }
                    ] 
                }  
            ]    
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                            {
                                name:"Chandan Yadav",
                                text:"I love your store Redux but only when React is there.",
                                replies:[
                                        {
                                            name:"Julie",
                                            text:"Indian people are just impossible.",
                                            replies:[
                                                
                                            ]
                                        },
                                        {
                                            name:"Chandan Yadav",
                                            text:"I love your store Redux but only when React is there.",
                                            replies:[
                                                    {
                                                        name:"Julie",
                                                        text:"Indian people are just impossible.",
                                                        replies:[
                                                            
                                                        ]
                                                    }
                                            ]
                                        },
                            
                                ]
                            }
                    ]
                }
                    
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    },
    {
        name:"Chandan Yadav",
        text:"I love your store Redux but only when React is there.",
        replies:[
                {
                    name:"Julie",
                    text:"Indian people are just impossible.",
                    replies:[
                        
                    ]
                }
        ]
    }


    
]

const CommentList=({comments})=>{

    return  comments.map((comment,indx)=>(
        <div  key={indx}>
               <Comment data={comment}/>
               
              <div className='pl-5 ml-5 border border-l-black'>
                    <CommentList comments={comment.replies}/>
              </div>
               

              
        </div>
               
                 
    ))
}

const Comment=({data})=>{
    const {name,text,replies}= data;

    return(
        <div className='flex p-2 m-2 shadow-sm hover:bg-gray-100 rounded-lg'>
            <img 
                alt='comment-user icon'
                src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                className='w-8 h-8'
            />
            <div className='px-2 text-sm'>
                    <h3 className='font-bold'>{name}</h3>
                    <h3>{text}</h3>
                 
            </div>
            
        </div>
    )

}

const CommentsContainer = () => {
  return (
    <div className='p-4 ml-8 '>
        <h1 className='font-bold text-2xl'>Comments</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer