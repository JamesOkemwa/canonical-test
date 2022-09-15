import React from 'react'

type BlogPostProps = {
  authorName: string
  authorLink: string
  blogCategory: string
  blogDate: string
  blogLink: string
  blogTitle: string
  blogType: string
  featuredMediaLink: string
}

// format the date to a date-monthName-year format
const formatDate = (date: string): string => {
  let dateObject = new Date(date)
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthName = months[dateObject.getMonth()]
  let dateString =  dateObject.getDate()+ " "+ monthName + " " + dateObject.getFullYear();

  return dateString
}

const BlogPostCard = ({ 
  authorName,
  authorLink,
  blogCategory, 
  blogDate, 
  blogLink,
  blogTitle, 
  blogType, 
  featuredMediaLink, 
}: BlogPostProps) => {
  
  return (
      <div className="col-4 col-medium-2 p-card--highlighted" style={{display: "flex", flexDirection: 'column', borderTop: "3px solid rgb(172, 123, 163)"}}>
          <header className='p-card__header'>
            <h5 className='p-muted-heading u-no-margin--bottom'>{blogCategory}</h5>
          </header>
          
          <div className="p-card__content" style={{flex: 1, paddingBottom: "8px", paddingTop: "16px"}}>
            <a href={blogLink}>
              <img className="p-card__image" src={featuredMediaLink} alt=""/>
            </a>
            
            <h3 className='p-heading--4'>
              <a href={blogLink}>{blogTitle}</a>
            </h3>

            <p>
              <em>
                By <a href={authorLink}>{authorName}</a> on {formatDate(blogDate)}
              </em>
            </p>
          </div>

          <hr />
          <p>{blogType}</p>
          
      </div>
  )
}

export default BlogPostCard