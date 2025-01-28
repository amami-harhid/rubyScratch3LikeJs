require "js"
class P
#    def initialize
#      puts 'Init'
#    end

    def self.while( condition, &block)
        while condition do
            block.call
        end
    end
    def self.loadImage(img, name)
        _p = JS::global[:P]
        _p.loadImage(img, name);
    end
    def self.preload(&block)
        yield block
    end
    def self.createStage(name)
        puts name
       JS::global.call(:createStage, name)
    end
    def self.addImage(imgName)
        JS::global.call(:addImage, imgName)
    end
    def self.prepare(&block)
        yield block
    end
    def self.setting(&block)
        yield block
    end
    def self.method_missing(method, *params)
        JS::global.call(method, *params)
    end
end