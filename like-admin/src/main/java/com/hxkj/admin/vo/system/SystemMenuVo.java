package com.hxkj.admin.vo.system;

import lombok.Data;

import java.io.Serializable;

@Data
public class SystemMenuVo implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;
    private Integer pid;
    private String menuType;
    private String menuName;
    private String menuIcon;
    private Integer menuSort;
    private String perms;
    private Integer isDisable;
    private String createTime;
    private String updateTime;

}