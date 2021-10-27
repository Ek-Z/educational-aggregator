<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FitredCoursesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'source' => $this->author,
            'image' => $this->image,
            'isActive' => $this->isActive,
            'language' => $this->language,
            'programmingLanguage_id' => $this->programmingLanguage_id,
            'programmingLanguage' => $this->programmingLanguage,
        ];
    }
}