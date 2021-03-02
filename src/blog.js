import React  from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './metismenu.min.css';
import { faArrowLeft, faArrowRight, faBars, faCalendar, faComment, faCommentDots, faSearch, faTag } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF, faInstagram, faPinterest, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import './blog.css';
import Navbar from './nav';
import Footer from './footer';
import image1 from './assets/img/fall.png';
import image2 from './assets/img/download.png';
import image3 from './assets/img/blog1.jpg';





const Blog = () => {


  return (
    <html>
       <Navbar />
       
      <body style={{backgroundColor:"#e1e6ed"}}>
      {/*<!-- Begin page -->*/}
         <div id="wrapper">
     {/*<!-- Top Bar Start -->*/}
        <div class="topbar-mobile">
            <div class="logo">
            
            <h2>Mesozi Blog</h2>
              
                  
             
            </div>
        </div>
        {/*<!-- Top Bar End -->*/}





        
        {/*<!-- ========== Left Sidebar Start ========== -->*/}
        <div class="left side-menu">

            <div class="slimscroll-menu" id="remove-scroll">

                <div class="logo">
               
                  <h2>Mesozi Blog</h2>
                </div>
        

        {/*<!--- Sidemenu -->*/}
                <div id="sidebar-menu">
                    {/*<!-- Left Menu Start -->*/}
                    <ul class="metismenu" id="side-menu">

                        <li>
                            <a href="#"><span> Home</span></a>
                        </li>

                       
                        <li>
                            <a href="#"><span> Lifestyle </span></a>
                        </li>

                        <li>
                            <a href="#"><span> Travel </span></a>
                        </li>

                        <li>
                            <a href="#"><span> Music </span></a>
                        </li>

                       

                    </ul>

                   

                </div>
               {/*<!-- Sidebar -->*/}
                <div class="clearfix"></div>

            </div>
            {/*<!-- Sidebar -left -->*/}

        </div>
       {/* <!-- Left Sidebar End -->*/}
        



        <div class="page-wrapper">
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-title">
                                <div class="row">
                                    <div class="col-md-9 col-xs-12">
                                        <h2><span>News and Stories</span></h2>

                                        <p class="subtitle text-muted">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 pb-5">
                <div class="container">

                    <div class="row">
                       {/* <!-- Content-->*/}
                        <div class="col-xl-8">

                            {/*<!-- Post-->*/}
                            <article class="post">

                                <div class="post-header">
                                    <h2 class="post-title"><a href="#">Beautiful Day With Friends In Paris</a></h2>
                                    <ul class="post-meta">
                                        <li><i><FontAwesomeIcon icon={faCalendar} /></i> July 03, 2019</li>
                                        <li><i><FontAwesomeIcon icon={faTag} /></i> <a href="#">Branding</a>, <a href="#">Design</a></li>
                                        <li><i><FontAwesomeIcon icon={faCommentDots} /></i> <a href="#">3 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="post-preview">
                                    <a href="#"><img src={image1} alt="" class="img-fluid rounded"></img></a>
                                </div>
                                <div class="post-content">
                                    <p>Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.</p>
                                </div>

                                <div><a href="#" class="btn btn-outline-custom">Read More <i><FontAwesomeIcon icon={faArrowRight} /></i></a></div>

                                </article>
                               {/*<!-- Post end-->*/}

                             {/*  <!-- Post-->*/}
                            <article class="post">

                                <div class="post-header">
                                    <h2 class="post-title"><a href="#">Nature valley with cooling environment</a></h2>
                                    <ul class="post-meta">
                                        <li><i><FontAwesomeIcon icon={faCalendar} /></i> July 07, 2019</li>
                                        <li><i><FontAwesomeIcon icon={faTag} /></i> <a href="#">Branding</a>, <a href="#">Design</a></li>
                                        <li><i><FontAwesomeIcon icon={faCommentDots} /></i><a href="#"> 3 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="post-preview">
                                    <a href="#"><img src={image2} alt="" class="img-fluid rounded"></img></a>
                                </div>

                                <div class="post-content">
                                    <p>Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.</p>
                                </div>

                                <div><a href="#" class="btn btn-outline-custom">Read More <i><FontAwesomeIcon icon={faArrowRight} /></i></a></div>

                            </article>
                          {/*  <!-- Post end-->*/}

                          {/*<!-- Pagination-->*/}
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="pagination">
                                        <li class="next"><a href="#"><i><FontAwesomeIcon icon={faArrowLeft} /></i></a></li>
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li class="prev"><a href="#"><i><FontAwesomeIcon icon={faArrowRight} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                           {/* <!-- Pagination end-->*/}
                        </div>
                      {/*  <!-- Content end--> */}

                                
                               {/* <!-- Sidebar--> */}
                        <div class="col-xl-4">
                            <div class="sidebar">

                               {/* <!-- Search widget-->*/}
                                <aside class="widget widget_search">
                                    <form>
                                        <input class="form-control pr-5" type="search" placeholder="Search..."></input>
                                        <button class="search-button" type="submit"><span><i><FontAwesomeIcon icon={faSearch} /></i></span></button>
                                    </form>
                                </aside>

                               

                                <aside class="widget about-widget">
                                    <div class="widget-title">Subscribe & Follow</div>

                                    <ul class="socials">
                                        <li><a href="http://facebook.com"><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                        <li><a href="http://twitter.com"><i><FontAwesomeIcon icon={faTwitter}/></i></a></li>
                                        <li><a href="http://instagram.com"><i><FontAwesomeIcon icon={faInstagram}/></i> </a></li>
                                        <li><a href="http://pinterest.com"><i><FontAwesomeIcon icon={faPinterest}/></i></a></li>
                                    </ul>

                                </aside>

                                {/*<!-- Categories widget-->*/}
                                <aside class="widget widget_categories">
                                    <div class="widget-title">Categories</div>
                                    <ul>
                                        <li><a href="#">Journey</a> (40)</li>
                                        <li><a href="#">Photography</a> (08)</li>
                                        <li><a href="#">Lifestyle</a> (11)</li>
                                        <li><a href="#">Food & Drinks</a> (21)</li>
                                    </ul>
                                </aside>

                               {/* <!-- Recent entries widget-->*/}
                                <aside class="widget widget_recent_entries_custom">
                                    <div class="widget-title">Popular Posts</div>
                                    <ul>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src={image1} alt="" class="img-fluid"></img></a>
                                            </div>
                                            <div class="wb"><a href="#">Beautiful Day With Friends..</a> <span class="post-date">Jun 15, 2019</span></div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src={image2} alt="" class="img-fluid"></img></a>
                                            </div>
                                            <div class="wb"><a href="#">Nature valley with cooling..</a> <span class="post-date">Jun 10, 2019</span></div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src={image3} alt="" class="img-fluid"></img></a>
                                            </div>
                                            <div class="wb"><a href="#">15 Best Healthy and Easy Salad..</a> <span class="post-date">Jun 8, 2019</span></div>
                                        </li>
                                    </ul>
                                </aside>

                               {/* <!-- Text widget--> */}
                                <aside class="widget">
                                    <div class="widget-title">Text Widget</div>

                                    <p class="text-muted text-widget-des">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. </p>

                                </aside>

                               {/* <!-- Archives widget--> */}
                                <aside class="widget">
                                    <div class="widget-title">Archives</div>

                                    <ul>
                                        <li><a href="#">March 2019</a> (40)</li>
                                        <li><a href="#">April 2019</a> (08)</li>
                                        <li><a href="#">May 2019</a> (11)</li>
                                        <li><a href="#">Jun 2019</a> (21)</li>
                                    </ul>

                                </aside>

                                {/*<!-- Tags widget-->*/}
                                <aside class="widget widget_tag_cloud">
                                    <div class="widget-title">Tags</div>
                                    <div class="tagcloud">
                                        <a href="#">logo</a>
                                        <a href="#">business</a>
                                        <a href="#">corporate</a>
                                        <a href="#">e-commerce</a>
                                        <a href="#">agency</a>
                                        <a href="#">responsive</a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                       {/* <!-- Sidebar end-->*/}
                    </div>
                    </div>

                
                {/*<!-- end container -->*/}
                                
                                
                                
                                
                                
                                
                                
                                
                                </div>
            
            


</div>
</div>  
          
    
 </body>
<Footer />
</html>
     )   
}

export default Blog;