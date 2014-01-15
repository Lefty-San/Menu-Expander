/*
 *  Script file for Menu-Expander
 *  Created by Lefty-San on January 14, 26 Heisei
 */

/* navigation items, be sure to include any additional navigation items */
/* this is how you will effectively remove the class without risking other
 * div elements on your page. Make sure you store the id="value"
 */
nav_list = new Array();
nav_list[0] = 'nav-home';
nav_list[1] = 'nav-interests';
nav_list[2] = 'nav-live';
nav_list[3] = 'nav-about';

function expand_nav(id) {

    var b = document.getElementById(id);
    /* using the full javascript long hand here...makes you appreciate jquery eh? */
    if (b.getAttributeNode('class').value == 'nav-expand') {
        b.getAttributeNode('class').value = "";
    } else {
        for (x = 0; x < nav_list.length; x++) {
            document.getElementById(nav_list[x]).getAttributeNode('class').value = "";
        }
        b.getAttributeNode('class').value = "nav-expand";
    }
    /* if b != then we wait until the wipe is triggered to tail the class back on 
     * this is what creates the 'multi-bounce' effect when clicking rapidly
     */
}