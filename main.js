function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(100, 230);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot()
{
    pic_name = document.getElementById("pic_name").value;
    save(pic_name); 
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}