<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->unique()->word,
            'price' => $this->faker->randomFloat(2, 5000, 100000),
            'category_id' => $this->faker->numberBetween(1, 5),
            'description' => $this->faker->sentence(10),
            'image' => $this->faker->imageUrl(),
            'stock' => $this->faker->numberBetween(5, 25),
        ];
    }
}
