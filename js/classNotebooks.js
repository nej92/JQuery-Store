class Notebook{
    constructor(marca, precio, disco, procesador, img){

    this.marca = marca;
    this.precio = precio;  
    this.disco = disco;
    this.procesador = procesador;
    this.img = img;
    }
  
}
const grupoNotebooks = [];


grupoNotebooks.push (new Notebook ("Lenovo", 70999, "256GB", "Intel Core i3", "https://www.lenovo.com/medias/lenovo-300e-chromebook-front.png?context=bWFzdGVyfHJvb3R8MTE0Mjg0fGltYWdlL3BuZ3xoZjkvaDZlLzk5MTE4Mjc2MjgwNjIucG5nfDkxZDE5YTA1ZDVjYWMyY2FlODdjZWE4MWVhY2NjNjhhYzk4ZWM4YmI2YmM3MjU3ZWZmM2UyOWExZDNhYzBmYmE"));
grupoNotebooks.push (new Notebook ("IdeaPad", 115999, "1TB", "Intel Core i3",  "https://www.lenovo.com/medias/lenovo-edu-14w-laptop-front.png?context=bWFzdGVyfHJvb3R8NTAxNjJ8aW1hZ2UvcG5nfGgzZS9oNjIvOTkwOTU5MDE2MzQ4Ni5wbmd8YjIxMTMwYmUxYjA2MWY3ZTRhODkyYjUyMzlhNjFkZDk1YTc5YWQ5ZGUxNzk0NTcwYTkzYjg1MTA3MGI3ZTZhZA"));
grupoNotebooks.push (new Notebook ("IdeaPad", 132998, "2TB", "Intel Core i5", "https://www.lenovo.com/medias/C340-14Int-Thumbail-LA.png?context=bWFzdGVyfHJvb3R8MTI2NTJ8aW1hZ2UvcG5nfGg3MS9oN2QvMTA1Mjc4NTYxMzIxMjYucG5nfGY4MWFiN2M0M2NiYjEzMGFmY2NhYzgzMjQ0NmFlNDY1YzllMTdiNWIzODNjNTA2NTM5YTM4NDZjOWM2NDhiNjQ"));
grupoNotebooks.push (new Notebook ("IdeaPad", 136998, "2TB", "AMD", "https://www.lenovo.com/medias/lenovo-laptop-thinkbook-13s-gen-2-intel-front.png?context=bWFzdGVyfHJvb3R8MjQ2NTh8aW1hZ2UvcG5nfGhhNS9oNWUvMTExODE0MjgwMTUxMzQucG5nfDY4YjE4MDdhMzdhMTZhNGQ4M2U5YjgwMGZmZjZjNTg2YWM1YjFkM2Y1YzNiODkwZmE0ZGQ3ODVkZTJkNzBiY2I"));
grupoNotebooks.push (new Notebook ("Yoga", 158999, "2TB", "AMD", "https://www.lenovo.com/medias/lenovo-laptop-yoga-c740-15-front.png?context=bWFzdGVyfHJvb3R8MTA4NjgxfGltYWdlL3BuZ3xoZTcvaDYxLzEwNTM2NTE1MDQzMzU4LnBuZ3wyMGE0MWVjOGRiZGQ3NjkzZjkxMGNlNTM5ZTZkMjYzNzZlMjhjMDcwY2I3ZGM3ZDcxYmM1ZGRkYmQ0MzAwZThk"));
grupoNotebooks.push (new Notebook ("Yoga", 158999, "1TB", "Intel Core i5", "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t15p-15-series-thumbnail.png?context=bWFzdGVyfHJvb3R8ODM5ODd8aW1hZ2UvcG5nfGhhZi9oYjYvMTA5NTcxMzUwMjAwNjIucG5nfDQ5MjZhZTNmNDMxM2Y2NzQ5MmZjZmM3OTQ2OGY1NWRmMTgwNWY5Yjg3NGVlYzljNDk1NDgwYTkyMjhmNjcyNzA"));
grupoNotebooks.push (new Notebook ("ThinkBook", 169999, "256GB", "Intel Core i5", "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t15-series-thumbnail.png?context=bWFzdGVyfHJvb3R8MTM4Nzh8aW1hZ2UvcG5nfGg5Yy9oNGIvMTA4MDg4MTQ0MDM2MTQucG5nfGQ2ZTVjNTliYzcwYTUxNWNhMzc1OTQ5ZDBmMjAyNjdjZWY5YzNlODM1NzlkMmNlYzBmMTE1MDFhOTM4YjMyYjc"));
grupoNotebooks.push (new Notebook ("ThinkPad", 173999, "256GB", "AMD", "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e15-gen-2-series-thumbnail.png?context=bWFzdGVyfHJvb3R8OTA5ODR8aW1hZ2UvcG5nfGg1NC9oZWYvMTExNDEyNjkwMjg4OTQucG5nfGZkNTI2ODQ2N2QxODlkMGM4MzU5ZGExYWU0MTczNzM5MDU5ZTM5NjZlYjQ4OWJjODg0NWI5ZmYxZTI5YmZmMzY"));
grupoNotebooks.push (new Notebook ("ThinkBook", 174999, "1TB", "AMD", "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t14-amd-series-thumbnail.png?context=bWFzdGVyfHJvb3R8MjM4NTF8aW1hZ2UvcG5nfGhkYS9oMTQvMTA4NTQ1NTk2MTI5NTgucG5nfGMxZGI5YWExYTc1M2JlZGE3ZTdiNDE2MThmNmFmMGVkNDM3OTE1NDE5NzlkMDI5NjRkY2JmZGJjMDA4OWMwYzI"));
grupoNotebooks.push (new Notebook ("ThinkPad", 183999, "1TB", "Intel Core i5", "https://www.lenovo.com/medias/lenovo-laptop-think-thinkpad-x13-gen-2-intel-front.png?context=bWFzdGVyfHJvb3R8OTkxMzl8aW1hZ2UvcG5nfGg3MC9oNjQvMTE0NTUwNDQ4MTI4MzAucG5nfDhmMTVlMmZkMGEyZTZiYjgwOGQwZThlNmU2MjZiYWQ2NWMwZmJlM2ZmZWRjZDBjZmY3MGFjZGU0MGI0YjViZmQ"));

