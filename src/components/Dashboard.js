import React from 'react';
import "../static/css/Dashboard.css";

const Dashboard = () => {
    return (
       <>
        <div class="main">
            <div class="banner">
                <div class="banner_text">Admin Panel- Industry Cell website</div>
            </div>
            <div>
                <div class="new_content">
                    <button class="new_content_button">New</button>
                <div class="categories">
                    <a href="blogadd.html">Blog</a>
                    <a href="eventadd.html">Event</a>
                </div>
                </div>
                    <input type="text" class="searchbox" placeholder="Search"></input>
                <div class="sort_by_type">
                    <input type="checkbox" name="blog" value="Blog"></input>
                    <label for="blog">Blog</label>
                    <input type="checkbox" name="event" value="Event"></input>
                    <label for="event">Event</label>
                </div>
            </div>
            <div class="table_header">
                <div class="table_title">Title</div>
                <div class="table_date">Date</div>
                <div class="table_type">Type</div>
            </div>
            <div class="table_cell">
                <div class="cell_title">Lorem ipsum der farmit nella cursus fur vanatem</div>
                <div class="cell_date">02-05-2021</div>
                <div class="cell_type">Blog</div>
                <input type="button" class="cell_delete" value="delete"></input>
            </div>
            <div class="table_cell">
                <div class="cell_title">Lorem ipsum der farmit nella cursus fur vanatem</div>
                <div class="cell_date">02-05-2021</div>
                <div class="cell_type">Blog</div>
                <input type="button" class="cell_delete" value="delete"></input>
            </div>
            <div class="table_cell">
                <div class="cell_title">Lorem ipsum der farmit nella cursus fur vanatem</div>
                <div class="cell_date">02-05-2021</div>
                <div class="cell_type">Blog</div>
                <input type="button" class="cell_delete" value="delete"></input>
            </div>
        </div>
       </>
    );
}


export default Dashboard;