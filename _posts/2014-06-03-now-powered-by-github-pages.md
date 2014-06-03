---
layout: post
title: Now powered by GitHub Pages
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

## It's time to say "good bye" to an old friend

I first purchased my own web hosting back in 2006, with the folks at [Brinkster](http://www.brinkster.com). I was an asp.net developer at the time, and after using their [free educational hosting package](http://www.brinkster.com/free-hosting.aspx) whilst at university I decided to stay loyal.

Things have moved on a lot since 2006. I've re-written my personal site more times than I care to imagine. I've tried various ideas out. I've used my hosting as a "dumping ground" for on-the-side projects and technical challenges. The truth is, I'm paying for something I don't use.

I'm a big fan of [GitHub](http://github.io). I have several open-source projects hosted with them, and recently have thought "why not open source my web site?"

## Enter GitHub Pages

[GitHub Pages](https://pages.github.com/) are free-to-host, static web sites. You can have a repository for your GitHub username, and therefore a free, static web site. GitHub Pages also support [Jekyll](http://jekyllrb.com), a blog-aware, static site generator, written by one of the founders of GitHub. A free-to-host, blog aware site? Yes please!

### How on earth do you migrate a blog to GitHub Pages?

My blog used to be on [WordPress](http://wordpress.org), which I still regard as one of the best blogging/CMS software packages around. Therefore, I'll be basing the following on an export from WordPress, but the steps are going to be pretty much the same regardless of where your content comes from.

Before exporting a site and importing to GitHub Pages, it is always a good idea to plan out the series of steps that need to take place and ensure that anything your blog depends on (such as a custom domain name), are in place or at least editable.

Here's what needs to be in place before we can begin:

* Ensure domain name DNS entries can be edited - if you've lost that password or want to move domain registrars (like I did), now is the time to sort that out. You'll need to be edit the "A" and "CNAME" records.
* Have an export of your existing site data ready. Keep this somewhere safe, but accessible. There are plenty of tutorials on how to do this, so I won't explain here.
* [Create a personal or organisation repository](https://github.com/new) on GitHub (depending on the type of blog you're moving). This is very simple to do. Simply go to your homepage on GitHub and create a repository called <username>.github.io (where <username> is the your GitHub username or organisation username on GitHub).
* Clone this repository to your computer using the [GitHub client](https://help.github.com/articles/set-up-git) for your system.
* Install Ruby on your system. Mac users have this already. Windows users can use [RubyInstaller](http://rubyinstaller.org/)
* Install the Jekyll ruby gem: type `gem install jekyll` in a command prompt or terminal window (admin access may be required).
* Install the Jekyll importer ruby gem: type `gem install jekyll-import` in a command prompt or terminal window (admin access may be required).

Quite a list, but now the fun begins. Perform the following to import your blog to GitHub Pages:

* Navigate to the repository you cloned to your system in a terminal window or command prompt.
* Type the following command to create a new Jekyll site: `jekyll new`. Hit return.
* Run the following command to import your previous blog data (remember I'm doing this as a WordPress import): `ruby -rubygems -e 'require "jekyll-import"; JekyllImport::Importers::WordpressDotCom.run({ "source" => "<path_to_export_file>.xml" })'`. Hit return.
* Run the following command to spin up a local site instance to verify your content is as it should be: `jekyll serve`. Hit return.
* In your favourite web browser, navigate to "http://0.0.0.0:4000". You should see a basic site with your blog posts listed.
* Press 'CTRL+C' in your terminal or command prompt to stop the local site instance.

If you are using a custom domain (aaronallport.com in my case), create a file called `CNAME` (no filename extension) in the root directory of your Jekyll site. It's contents need to be the exact domain you will use to access your site. In my case, it's "aaronallport.com" (see this for yourself at: [https://github.com/aaronallport/aaronallport.github.io/blob/master/CNAME](https://github.com/aaronallport/aaronallport.github.io/blob/master/CNAME))

Next, using the GitHub client on your system, commit all files to the <username>.github.io repository.

You now have a GitHub Pages site. It can take up to 10 minutes to generate, and will be accessible in your browser at <username>.github.io

### How do I point my custom domain to my new GitHub Pages site?

This one is easy. Navigate to the control panel for your domain name you wish to use (and you'll have specified in the `CNAME` file created earlier).

* Create two "A" records, both called "*" and for the address fields, use the two IP addresses found at: TODO!!
* If you are using a "www" subdomain, or wish to support one, create two "A" records, both called "www", and use the same IP adresses as above. Also, create a CNAME record called "www" and for the address, use <username>.github.io

DNS changes take a while to propagate (mine took about 4 hours or so).

## I've hit an issue

My best advice is to check out the GitHub documentation, found at: [https://help.github.com/articles/using-jekyll-with-pages](https://help.github.com/articles/using-jekyll-with-pages)
Custom domain instructions are found at [https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages)
Also, there is a good article on the DNS side of things at: [http://donalfarrell.com/2012/07/13/Setting-up-GitHub-redirects.html](http://donalfarrell.com/2012/07/13/Setting-up-GitHub-redirects.html)

## A free blog

You're the proud owner of a free, static site/blog, powered by GitHub and Jekyll. Yes, your site is now open-source, but it would be nice to show them some love.
