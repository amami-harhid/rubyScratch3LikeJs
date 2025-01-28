p = P.new
idx = 0
P::while true do
    puts idx
    idx += 1
    if idx > 10 then
        break
    end
end

puts "end"

P::test

P::test2 "x1" , "x2"

puts 'main#1'
#P::preload do
#    P::loadImage("https://amami-harhid.github.io/scratch3LikeJsTrial/web/assets/Jurassic.svg", "Jurassic")
#end

def preloader 
    P::loadImage("https://amami-harhid.github.io/scratch3LikeJsTrial/web/assets/Jurassic.svg", "Jurassic")
end

def prepareer 

    P::createStage("stage")
    P::addImage("Jurassic")

end

JS::global[:P]._init();

