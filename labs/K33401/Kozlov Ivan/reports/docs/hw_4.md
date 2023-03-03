# Практическая работа № 4

`Описание:`вынести все используемые ранее SVG-иконки в общий SVG-спрайт

> Добавил иконки и вынес их в svg sprite

![Screenshot](img/hw_4/ic1.png)
![Screenshot](img/hw_4/ic2.png)
![Screenshot](img/hw_4/ic3.png)

- `sprite.svg`
```svg
<svg xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

    <symbol id="add" viewBox="0 0 512 512">
        <path class="st0" d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  
        s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z" />
    </symbol>

    <symbol id="pencil" viewBox="0 0 485.219 485.22">

        <path d="M467.476,146.438l-21.445,21.455L317.35,39.23l21.445-21.457c23.689-23.692,62.104-23.692,85.795,0l42.886,42.897
        C491.133,84.349,491.133,122.748,467.476,146.438z M167.233,403.748c-5.922,5.922-5.922,15.513,0,21.436
        c5.925,5.955,15.521,5.955,21.443,0L424.59,189.335l-21.469-21.457L167.233,403.748z M60,296.54c-5.925,5.927-5.925,15.514,0,21.44
        c5.922,5.923,15.518,5.923,21.443,0L317.35,82.113L295.914,60.67L60,296.54z M338.767,103.54L102.881,339.421
        c-11.845,11.822-11.815,31.041,0,42.886c11.85,11.846,31.038,11.901,42.914-0.032l235.886-235.837L338.767,103.54z
        M145.734,446.572c-7.253-7.262-10.749-16.465-12.05-25.948c-3.083,0.476-6.188,0.919-9.36,0.919
        c-16.202,0-31.419-6.333-42.881-17.795c-11.462-11.491-17.77-26.687-17.77-42.887c0-2.954,0.443-5.833,0.859-8.703
        c-9.803-1.335-18.864-5.629-25.972-12.737c-0.682-0.677-0.917-1.596-1.538-2.338L0,485.216l147.748-36.986
        C147.097,447.637,146.36,447.193,145.734,446.572z" />
    </symbol>

    <symbol id="trash">

        <path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 
        .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 
        12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z" />

    </symbol>

    <symbol id="reload">
        <path style="fill:#ffffff;" d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M8,14c-2.761,0-5-2.238-5-5
		s2.239-5,5-5V2l4,3L8,8V6C6.343,6,5,7.343,5,9s1.343,3,3,3s3-1.343,3-3c0-0.129-0.008-0.256-0.023-0.381l1.709-1.368
		C12.889,7.796,13,8.385,13,9C13,11.762,10.762,14,8,14z" />
    </symbol>

    <symbol id="send" viewBox="0 0 200 200">

        <path class="cls-1"
            d="M125,177.86a5,5,0,0,1-4.74-3.42L96,101.76,27.64,77.57a5,5,0,0,1,.2-9.49L169.22,24.53a5,5,0,0,1,6.23,6.3L129.76,174.37a5,5,0,0,1-4.73,3.49ZM45.23,73.19l56.44,20a5,5,0,0,1,3.07,3.13l20.15,60.44L163,36.9Z" />
        <path class="cls-1"
            d="M100,102.84a4.94,4.94,0,0,1-3.59-1.52,5,5,0,0,1,.11-7.07L131.86,60a5,5,0,0,1,7,7.18l-35.35,34.26A5,5,0,0,1,100,102.84Z" />
        <path class="cls-1"
            d="M75,175.69a5,5,0,0,1-3.19-8.85l25-20.69a5,5,0,0,1,6.38,7.7l-25,20.69A5,5,0,0,1,75,175.69Z" />
        <path class="cls-1"
            d="M29.31,175.69a5,5,0,0,1-3.53-8.54l45.68-45.69a5,5,0,0,1,7.08,7.08L32.85,174.22A5,5,0,0,1,29.31,175.69Z" />
        <path class="cls-1"
            d="M29.31,130a5,5,0,0,1-3.85-8.19l20.69-25a5,5,0,0,1,7.7,6.38l-20.69,25A5,5,0,0,1,29.31,130Z" />
    </symbol>

</svg>
```
<hr>

# Вывод

Добавлены иконки из SVG spite. Необходимо это, чтобы меньше писать повтороного кода. Принцип DRY/