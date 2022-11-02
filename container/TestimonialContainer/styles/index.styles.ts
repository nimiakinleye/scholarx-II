import styled from "styled-components";

export const TestimonialWrapper = styled.div`
.arrow{

    color: #2B2B40;
    background-color:#E5E5F2;
    border-radius:50%;
    cursor:pointer;
    z-index:100;
    border: 1px solid #80808C;
    padding:12px 15px;

    
}
.prev{
    position:absolute;
    bottom:50%;
    left:7%;
    
    
}
.next{
    position:absolute;
    bottom:50%;
    right:7%;
    
}
.image{
    border-radius:8px;
}

.testimonialCard{
    background: url(/images/testimonial-background.png);
    background-position: top left;
    background-color:#E5E5F2;
    background-repeat:no-repeat;
    border-radius:8px;
}
.testimonies{
    position:relative;
}
@media (max-width:1024px){
    .prev{
        left:0;
        
    }
    .next{
        right:0;
    }
}

`