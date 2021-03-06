class CreateDogParks < ActiveRecord::Migration[6.0]
  def change
    create_table :dog_parks do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :overall_rating
      t.string :imageUrl
      t.boolean :fenced
      t.boolean :off_leash

      t.timestamps
    end
  end
end
