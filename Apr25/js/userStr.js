function userStr(evt)
{
    console.log(searchBox.value);
    getReq(`https://api.gethub.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
    // if(evt.key !== undefined && evt.key !== 'Backspace' && evt.key !== 'Tab')
    // str += evt.key;

    // console.log(str, searchBox.value);

    // getCharacter(str);
}