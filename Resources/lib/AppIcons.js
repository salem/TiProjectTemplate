var AppIcons = {};
AppIcons.getIcon = function(name){
    return String.fromCharCode(AppIcons.icons[name]);
};
AppIcons.icons = {
    search:0xe600,
    grid:0xe601,
    list:0xe602,
    menu:0xe603, 
    wishlist:0xe604,
    flag:0xe605,
    account:0xe606,
    heart:0xe607,
    setting:0xe608,
    phone:0xe609,
    logout:0xe60a,
    check:0xe60b,
    delete:0xe60c,
    mirror:0xe60d
};
