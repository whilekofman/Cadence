# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_24_162007) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.bigint "athlete_id", null: false
    t.string "sport", null: false
    t.float "distance", null: false
    t.integer "hours", null: false
    t.integer "minutes", null: false
    t.integer "seconds", null: false
    t.string "title", null: false
    t.integer "intensity", null: false
    t.float "hr"
    t.text "pnotes"
    t.integer "tags"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.integer "purpose"
    t.datetime "start_time"
    t.index ["athlete_id"], name: "index_activities_on_athlete_id"
    t.index ["distance"], name: "index_activities_on_distance"
    t.index ["intensity"], name: "index_activities_on_intensity"
    t.index ["sport"], name: "index_activities_on_sport"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "author_id", null: false
    t.bigint "activity_id", null: false
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_comments_on_activity_id"
    t.index ["author_id"], name: "index_comments_on_author_id"
  end

  create_table "follows", force: :cascade do |t|
    t.bigint "follower_id", null: false
    t.bigint "following_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id", "following_id"], name: "index_follows_on_follower_id_and_following_id", unique: true
    t.index ["follower_id"], name: "index_follows_on_follower_id"
    t.index ["following_id"], name: "index_follows_on_following_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "liker_id", null: false
    t.string "likeable_type", null: false
    t.bigint "likeable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable"
    t.index ["liker_id", "likeable_id", "likeable_type"], name: "index_likes_on_liker_id_and_likeable_id_and_likeable_type", unique: true
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "activities", "users", column: "athlete_id"
  add_foreign_key "comments", "activities"
  add_foreign_key "comments", "users", column: "author_id"
  add_foreign_key "follows", "users", column: "follower_id"
  add_foreign_key "follows", "users", column: "following_id"
  add_foreign_key "likes", "users", column: "liker_id"
end
