# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_19_144549) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "flims", force: :cascade do |t|
    t.string "title"
    t.string "year"
    t.string "rated"
    t.string "released"
    t.string "runtime"
    t.string "genre"
    t.string "director"
    t.string "writer"
    t.string "actor"
    t.string "plot"
    t.string "language"
    t.string "country"
    t.string "awards"
    t.string "poster_img"
    t.string "rating_metascore"
    t.string "imdb_rating"
    t.string "imdb_votes"
    t.string "production"
    t.string "box_office"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "flim_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["flim_id"], name: "index_transactions_on_flim_id"
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "cc_number"
    t.string "cc_s_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "transactions", "flims"
  add_foreign_key "transactions", "users"
end
