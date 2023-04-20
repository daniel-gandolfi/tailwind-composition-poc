I created this project to test tailwind's capabilities and limits 4 building a portal. 

My goals are
- understand how it interacts with css modules (it works but you must not use @tailwind directives in the module or it generates the tailwind classes AND it sort of create a module version of those classes, see Post in the packages/island and its generated css. If you want to break it just add @tailwind utilities at the top)
- understand if it handles dedup of "custom" classes like "h-[2em]" (it does, see LatestPosts and Post in the packages/island)
- check if i can create a base theme, reuse its config in islands/modules while avoiding reimporting the theme's css
- check if i can use css vars in the theme

This is just a no-frills tecnical project so pork-arounds are welcome