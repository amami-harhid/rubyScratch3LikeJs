ImgHost = "https://amami-harhid.github.io/scratch3LikeJsTrial"

def preload 
    P::loadImage("#{ImgHost}/web/assets/Jurassic.svg", "Jurassic")
end

def prepare 

    P::createStage("stage")
    P::addImage("Jurassic")

end

def setting


end

JS::global[:P]._init();

