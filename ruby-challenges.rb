# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def drinks(array, letter)
    array.select do |value|
        if value.include? letter
            value
        end
    end
end
p drinks beverages_array, letter_o
p drinks beverages_array, letter_t


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def values_sum(array)
    array.sum 
end

p values_sum nums_array1
p values_sum nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
class Bike
    attr_accessor :model, :current_speed
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster num
        @current_speed = current_speed + num
    end
    def brake num
        @current_speed = current_speed - num
        if current_speed < 0 
            @current_speed = 0 
        end 
    end
end
 my_bike = Bike.new("Trek", 2, 0)
my_bike.bike_info
p my_bike.pedal_faster(10)
p my_bike.bike_info
p my_bike.pedal_faster(18)
p my_bike.bike_info
p my_bike.brake(5)
p my_bike.bike_info
p my_bike.brake(25)
p my_bike.bike_info


# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# #<Bike:0x0000000125180ff8 @model="Trek", @wheels=2, @current_speed=0>
# "The Trek bike has 2 wheels and is going 0 mph."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
